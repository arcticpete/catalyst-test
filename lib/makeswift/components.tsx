import { Style } from '@makeswift/runtime/controls';
import { ReactRuntime } from '@makeswift/runtime/react';

function HelloWorld(props: React.HTMLProps<HTMLParagraphElement>) {
  return <p {...props}>Hello, world!</p>;
}

ReactRuntime.registerComponent(HelloWorld, {
  type: 'hello-world',
  label: 'Hello, world!',
  props: {
    className: Style(),
  },
});
