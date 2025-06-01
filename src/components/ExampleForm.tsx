import { useForm, SubmitHandler } from "react-hook-form";
import './ExampleForm.css';

export type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  date: number;
};


interface ExampleFormProps {
  onSubmitForm: SubmitHandler<FormValues>; 
}


function ExampleForm({ onSubmitForm }: ExampleFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

   const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
     
      onSubmitForm(data); 
      reset(); 
    } catch (err) {
      console.error("Ошибка отправки:", err);
    }
  };

  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
   
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" {...register('firstName')} required />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" {...register('lastName')} required />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" {...register('age')} required  />
      </div>

      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" {...register('city')} required />
      </div>

       <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="number" id="date" {...register('date')} required />
      </div>

      <button type="submit">Send</button>
    </form>
  );
}

export default ExampleForm;

