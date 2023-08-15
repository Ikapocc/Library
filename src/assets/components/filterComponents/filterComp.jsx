import * as React from 'react';
import { useId } from "react"
import "./filterComp.css"
import useFilter from "../../hooks/useFilter"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterComps() {
    const selectId = useId()
    const rangeId = useId()
    const {filterType, setFilterType} = useFilter()

    function handleChange(e, newValue) {
        setFilterType(prev => ({
            ...prev,
            pages : newValue
        }))
    }

    function handleSelect(e) {
        setFilterType(prev => ({
            ...prev,
            genre : e.target.value
        }))
    }

    return(
        <section className="filterHead">
            <div className="range">
                <label htmlFor={rangeId}>Filtrar por paginas</label>
                <div className="pages">
                <p>{filterType.pages[0]}</p>
                <Box sx={{ width: 250, display: "flex", alignItems: "center", color: 'success.main' }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={filterType.pages}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={1200}
                    />
                </Box>
                    <p>{filterType.pages[1]}</p>
                </div>
            </div>

            <div className='select'>
            <label>Escoge un genero</label>
                <FormControl sx={{ m: 2, minWidth: 100 }}>
                    <InputLabel sx={{ color: 'white' }} id="demo-simple-select-autowidth-label">Genero</InputLabel>
                    <Select sx={{ color: 'white' }}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={filterType.genre}
                    onChange={handleSelect}
                    autoWidth
                    label="Genero"
                    >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    <MenuItem value={"Fantasía"}>Fantasía</MenuItem>
                    <MenuItem value={"Ciencia ficción"}>Ciencia ficción</MenuItem>
                    <MenuItem value={"Zombies"}>Apocalipsis Zombie</MenuItem>
                    <MenuItem value={"Terror"}>Terror</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </section>
    )
}