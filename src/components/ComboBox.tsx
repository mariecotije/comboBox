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
  required?: boolean;
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
      <label>{label}</label>
      <br />
      <input
        className="form-input"
        list="universities"
        name={name}
        onChange={(e) => setSearch(e.target.value)}
        disabled={disabled}
        {...register(name)}
      />
      <datalist id="universities">
        {loading && <option value="Načítám..." />}
        {universities.map((university: University) => (
          <option key={university.name} value={university.name} />
        ))}
      </datalist>
    </div>
  );
}

export default ComboBox;
