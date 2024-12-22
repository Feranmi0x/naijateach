"use client"
import { useRouter } from "next/navigation";

const DictionaryNavigator = () => {
  const router = useRouter();

  // Handle the change in the select dropdown
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    // Redirect to the corresponding dictionary page
    router.push(`/dictionary/${selectedLanguage}`);
  };

  return (
    <div className="mt-2 flex center">
      <select
        onChange={handleChange}
        className="border-2 border-gray-300 rounded p-2 w-40"
      >
        <option >Choose</option>
        <option value="ig">Igbo</option>
        <option value="hs">Hausa</option>
        <option value="yr">Yoruba</option>
        <option value="pg">Pidgin</option>
      </select>
    </div>
  );
};

export default DictionaryNavigator;