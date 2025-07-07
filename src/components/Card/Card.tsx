interface Props {
    url: string;
}

export default function Card (props: Props){
    const {url} = props
    return <div>
        <img src={url} alt="" />
    </div>
}