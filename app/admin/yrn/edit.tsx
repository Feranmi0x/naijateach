import { Edit, required, SimpleForm, TextInput } from "react-admin"

export const YrnEdit = () => {
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
    source="yoruba" 
    validate={[required()]} 
    label="yoruba"/>
    <TextInput 
    source="audioPath" 
    validate={[required()]} 
    label="audio"/>
    </SimpleForm>
    </Edit>
    );
};