export const Input = (props: {
  type: string;
  forwardRef: React.RefObject<HTMLInputElement>;
  required?: boolean;
  name: string;
  min?: string;
  step?: string;
}) => {
  return (
    <input
      {...props}
      ref={props.forwardRef}
      className="rounded-md w-900 text-gray-800 px-3 py-1"
    />
  );
};
