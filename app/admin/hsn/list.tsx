import { Datagrid, List, TextField } from "react-admin"

export const HsnList = () => {
return (
<List>
<Datagrid rowClick="edit">
<TextField source="id" />
<TextField source="english" />
<TextField source="hausa" />
<TextField source="audioPath" />
</Datagrid>
</List>
);
};