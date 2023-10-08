export const gallery = props => ({
    date: props.date||Date.now(),
    image: props.image||'',
    title: props.title||''
});