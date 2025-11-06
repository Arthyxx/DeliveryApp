import { Redirect } from "expo-router";

export default function TabIndex () {
    return (
    <Redirect
    href={{
        pathname: '/menu/[id]',
        params: { id: '1' }, // ou outro id válido
    }}
/>);
}
