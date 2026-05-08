import Division from "./Division";
import Heading from "./Heading";

export default function PropDrillingDemo() {
    return (
        <Division>
            <Heading level={1}>This is my first heading</Heading>
            <Division>
                <Heading level={2}>This is my inner Level</Heading>
                <Heading level={2}>This is my inner Level</Heading>
                <Heading level={2}>This is my inner Level</Heading>
                <Division>
                    <Heading level={3}>Inner Heading</Heading>
                    <Heading level={3}>Inner Heading</Heading>
                    <Heading level={3}>Inner Heading</Heading>
                    <Heading level={3}>Inner Heading</Heading>
                    <Heading level={3}>Inner Heading</Heading>
                    <Heading level={3}>Inner Heading</Heading>
                    <Heading level={3}>Inner Heading</Heading>
                    <Heading level={3}>Inner Heading</Heading>
                    <Heading level={3}>Inner Heading</Heading>
                    <Heading level={3}>Inner Heading</Heading>
                </Division>
            </Division>
        </Division>

    );
}