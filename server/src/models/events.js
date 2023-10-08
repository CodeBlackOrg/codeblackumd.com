export const event = props => ({
    date: props.date||Date.now(),
    description: props.description||'',
    facebook: props.facebook||'',
    image: props.image||'',
    linkedin: props.linkedin||'',
    paragraph: props.paragraph||'',
    readtime: props.readtime||'',
    location: props.location||'',
    title: props.title||''
});