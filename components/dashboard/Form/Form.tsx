import Header from "@/components/dashboard/Header";
import { FormBody } from "@/components/dashboard/Form/FormBody";
import { ChatFormProps } from "@/components/dashboard/Form/FormTypes";

const Form = ({
  input,
  isLoading,
  handleInputChange,
  handleSubmit,
  stop,
}: ChatFormProps) => {
  return (
    <section className="h-screen w-full overflow-y-scroll lg:w-3/12">
      <Header />
      <FormBody
        input={input}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        stop={stop}
      />
    </section>
  );
};

export default Form;
