#!/usr/bin/env node
import { createConnection } from 'node:net'
import { spawn } from 'node:child_process'
import { readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const PORT = 3000

function isPortInUse(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const client = createConnection({ port })
    client.once('connect', () => { client.destroy(); resolve(true) })
    client.once('error', () => { client.destroy(); resolve(false) })
  })
}

function hasApiRoutes(): boolean {
  const apiDir = join(process.cwd(), 'api')
  if (!existsSync(apiDir)) return false
  try {
    const files = readdirSync(apiDir, { recursive: true }) as string[]
    return files.some(f => f.endsWith('.ts') || f.endsWith('.js'))
  } catch {
    return false
  }
}

async function main() {
  if (await isPortInUse(PORT)) {
    console.error(`\n✖  Port ${PORT} is already in use. Free it and try again.\n`)
    process.exit(1)
  }

  if (hasApiRoutes()) {
    console.log(`\n▶  Starting vercel dev on port ${PORT}...\n`)
    const child = spawn('npx', ['vercel', 'dev', '--listen', String(PORT)], {
      stdio: 'inherit',
      env: { ...process.env },
    })
    child.on('exit', code => process.exit(code ?? 0))
  } else {
    console.log(`\n▶  Starting vite on port ${PORT} + json-server on port 3001...\n`)
    const child = spawn(
      'npx',
      ['concurrently', '"vite --port 3000 --strictPort"', '"json-server mock/db.json --port 3001 --delay 100"'],
      { stdio: 'inherit', env: { ...process.env }, shell: true },
    )
    child.on('exit', code => process.exit(code ?? 0))
  }
}

main()
