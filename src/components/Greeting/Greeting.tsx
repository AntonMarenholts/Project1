interface Props {
    name: string;
    age?: number;
}

export default function Greeting(props: Props) {

    //с помощью деструктуризации получили нужный параметр из props
    const {name, age} = props;

    // const name = "Anton";

  return <p>Hello, {name}! {age}</p>;
}
