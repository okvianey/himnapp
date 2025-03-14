import React, { useState } from 'react';
import { navigate } from "gatsby";
import {
  Autocomplete,
  TextField
} from "@mui/material";
import hymnsList from "../assets/hymnsList.json";

export default function ComboBox({ handleSearch }) {
  const [ selectedOption, setSelectedOption ] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && selectedOption) {
      navigate(`/himno/${selectedOption.frontmatter.slug}`);
    }
  };

  const handleSelection = (e, value) => {
    if (value) {
      setSelectedOption(value); 
      navigate(`/himno/${value.frontmatter.slug}`);
    }
  };
  
  return (
    <Autocomplete
      // disablePortal
      id="combo-box-demo"
      size='small'
      noOptionsText="Himno no encontrado"
      options={hymnsList}
      clearIcon={null}
      getOptionLabel={(option)=> option.frontmatter.title || ""}
      sx={{ width: 300 }}
      onChange={handleSelection}
      renderInput={(params) => <TextField {...params} label="Buscar himno" onKeyDown={handleKeyDown} />}
    />
  );
}
