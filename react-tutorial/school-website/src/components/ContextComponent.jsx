import Division from "./Division";
import Heading from "./Heading";

export default function ContextComponent() {
    return (
        <Division level={1}>
            <Heading>This is Main Heading</Heading>
            
            <Division level={2}>
                <Heading>This is a Sub Heading</Heading>
                <Heading>This is a Sub Heading</Heading>
                <Division level={3}>
                    <Heading>This is third layer</Heading>
                </Division>
            </Division>
        </Division>
    );
}