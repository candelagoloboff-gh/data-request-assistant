import SeeMoreText from '.';
const meta = {
    component: SeeMoreText,
    title: 'Composed Components/SeeMoreText',
    tags: ['autodocs'],
    args: {
        text: 'Juane Algebra',
    },
};
export default meta;
export const Default = {
    args: {},
};
export const LongHTML = {
    args: {
        isHtmlText: true,
        text: `<p style="width: auto;">QA 9/JUN - Descripción HTML</p>
<p style="width: auto;"><strong style="width: auto;">QA 9/JUN - Descripción HTMLQA 9/JUN - Descripción HTML</strong></p>
<p style="width: auto;"><span style="text-decoration: underline; width: auto;"><strong style="width: auto;">QA 9/JUN - Descripción HTML</strong></span></p>
<p style="width: auto;"><s style="width: auto;"><span style="text-decoration: underline; width: auto;"><strong style="width: auto;">QA 9/JUN - Descripción HTML</strong></span></s></p>
<p style="width: auto;"><s style="width: auto;"><span style="text-decoration: underline; width: auto;"><strong style="width: auto;">QA 9/JUN - Descripción HTML</strong></span></s></p>
<ol style="width: auto; overflow-x: auto;">
<li style="width: auto;"><strong style="width: auto;">1</strong></li>
<li style="width: auto;"><strong style="width: auto;">2</strong></li>
</ol>
<ul style="width: auto; overflow-x: auto;">
<li style="width: auto;"><strong style="width: auto;">3</strong><strong style="width: auto;">- lala</strong></li>
</ul>`,
    },
};
export const ShortHTML = {
    args: {
        isHtmlText: true,
        text: `<p style="width: auto;">QA 9/JUN - Descripción HTML</p>
<ol style="width: auto; overflow-x: auto;">
<li style="width: auto;"><strong style="width: auto;">2</strong></li>
</ol>`,
    },
};
