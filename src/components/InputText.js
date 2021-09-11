/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 
import Error from './Error';

const InputText = (props) => {
    const { placeholder, register, name, required, errors} = props;
    return (
        <div className="input-text">  
            <input 
            placeholder={placeholder} 
            className="input" 
            type="text" 
            {...register(name, { 
                required: {
                    value: required, 
                    message: `${placeholder} cannot be empty`
                }, 
            })}/> 
            {required && (
                <Error  
                errors={errors}
                validate="required"
                name={name} />
            )}  
        </div>
    );
}
  
export default InputText;