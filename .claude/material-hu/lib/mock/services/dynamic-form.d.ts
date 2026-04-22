declare const dynamicFormService: {
    initDynamicForm: () => Promise<import("../../components/composed-components/dynamic-forms/types").DynamicFormResponse>;
    getDynamicFormProgress: () => Promise<import("../../components/composed-components/dynamic-forms/types").DynamicFormResponse>;
    updateDynamicFormProgress: () => Promise<import("../../components/composed-components/dynamic-forms/types").DynamicFormResponse>;
    getDynamicFormAnswer: () => Promise<any>;
};
export type AxiosResponseHeaders = Record<string, string> & {
    'set-cookie'?: string[];
};
export type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'purge' | 'PURGE' | 'link' | 'LINK' | 'unlink' | 'UNLINK';
export interface AxiosRequestConfig<D = any> {
    url?: string;
    method?: Method | string;
    baseURL?: string;
    data?: D;
}
export interface AxiosResponse<T = any, D = any> {
    data: T;
    status: number;
    statusText: string;
    headers: AxiosResponseHeaders;
    config: AxiosRequestConfig<D>;
    request?: any;
}
export default dynamicFormService;
