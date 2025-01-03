import { useState } from "react";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { MdCheck, MdEdit } from "react-icons/md";

import Input from "./Input";
import Icon from "./Icon";

export default function Editor({
  children,
  label,
  name,
  giveValue,
  onSubmit,
  loading,
  isError,
}) {
  const [isUpdating, setUpdating] = useState(false);
  const [value, setValue] = useState(giveValue);

  const handleEdit = () => {
    setUpdating(!isUpdating);
  };

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    return setValue(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (giveValue === value) return toast.info("Nothing changed in input.");
    if (value.length === 0) return toast.info("Field cannot be empty.");

    onSubmit({ name, value });

    if (!isError) return setUpdating(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-4 py-2 rounded-lg h-fit bg-neutral-900">
      <label htmlFor={name} className="w-full text-xs text-neutral-400">
        {label}
      </label>

      <div className="flex flex-col items-center justify-center w-full">
        {isUpdating ? (
          <form autoComplete="off" onSubmit={handleSubmit} className="flex">
            <Input
              id={name}
              name={name}
              value={value}
              onChange={handleChange}
              className="p-0 pt-1 border-b rounded-none "
            />
            <Icon
              disabled={loading}
              type="submit"
              icon={MdCheck}
              className="mx-2 hover:text-blue-600"
            />

            <Icon
              type="cancel"
              icon={RxCross2}
              onClick={handleEdit}
              className="hover:text-red-500"
            />
          </form>
        ) : (
          <div className="pt-[5px] w-full">{children}</div>
        )}
      </div>

      {!isUpdating && (
        <Icon
          size="16"
          icon={MdEdit}
          onClick={handleEdit}
          className="absolute p-1 rounded-full top-1 right-1 hover:bg-neutral-700"
        />
      )}
    </div>
  );
}
