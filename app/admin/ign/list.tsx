import { Datagrid, List, TextField } from "react-admin"

export const IgnList = () => {
return (
<List>
<Datagrid rowClick="edit">
<TextField source="id" />
<TextField source="english" />
<TextField source="igbo" />
<TextField source="audioPath" />
</Datagrid>
</List>
);
};