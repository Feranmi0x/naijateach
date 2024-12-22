import { Datagrid, List, TextField } from "react-admin"

export const YrnList = () => {
return (
<List>
<Datagrid rowClick="edit">
<TextField source="id" />
<TextField source="english" />
<TextField source="yoruba" />
<TextField source="audioPath" />
</Datagrid>
</List>
);
};