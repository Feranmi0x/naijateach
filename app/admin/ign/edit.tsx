import { Edit, required, SimpleForm, TextInput } from "react-admin"

export const IgnEdit = () => {
return (
   <Edit>
    <SimpleForm>
    <TextInput 
    source="id" 
    label="Id"/>
    <TextInput 
    source="english" 
    validate={[required()]} 
    label="english"/>
    <TextInput 
    source="igbo" 
    validate={[required()]} 
    label="igbo"/>
    <TextInput 
    source="audioPath" 
    validate={[required()]} 
    label="audio"/>
    </SimpleForm>
    </Edit>
    );
};