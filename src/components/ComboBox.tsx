import React from "react";
import { useEffect } from "react";
import axios from "axios";

type ComboBoxProps = {
  label: string;
  name: string;
  register: any;
  errors: any;
  disabled?: boolean;
  error?: string;
};

type University = {
  name: string;
};

function ComboBox({
  label,
  name,
  register,
  disabled,
}: ComboBoxProps): JSX.Element {
  //fetch data from api http://universities.hipolabs.com/search?country=Czech+Republic&name=[name]
  const [universities, setUniversities] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        `http://universities.hipolabs.com/search?country=Czech+Republic&name=${search}`
      );
      setUniversities(result.data);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  return (
    <div>
      {/* create combo box to show universities after click on the input */}
      <label>{label}</label>
      <input
        {...register(name, { required: true })}
        disabled={disabled}
        onClick={() => setSearch("")}
        onChange={(e) => setSearch(e.target.value)}
        list="universities"
      />

      <datalist id="universities">
        {universities.map((university: University, index: number) => (
          <option key={index} value={university.name} />
        ))}
      </datalist>
    </div>
  );
}

export default ComboBox;
