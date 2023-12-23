import {
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Drawer,
  Box,
  Typography
} from '@mui/material'
import { useState } from 'react'

const Export = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  const [formato, setFormato] = useState<string>('csv')

  const handleChangeFormato = (event: SelectChangeEvent) => {
    setFormato(event.target.value)
  }

  const tableHead = [
    {
      label: 'tipo'
    },
    {
      label: 'tipoOperacion'
    },
    {
      label: 'numeroSiopel'
    },
    {
      label: 'Concertacion'
    },
    {
      label: 'Liquidacion'
    },
    {
      label: 'codigoEspecie'
    },
    {
      label: 'nombreEspecie'
    },
    {
      label: 'plazo'
    },
    {
      label: 'moneda'
    },
    {
      label: 'tasa'
    },
    {
      label: 'valorNominal'
    },
    {
      label: 'precio'
    },
    {
      label: 'monto'
    },
    {
      label: 'cuentaAgente'
    },
    {
      label: 'EstadoLiq'
    }
  ]
  return (
    <>
      <Button variant={'outlined'} onClick={handleOpen}>
        Exportar
      </Button>

      <Drawer open={open} onClose={handleClose} anchor={'right'}>
        <Box p={2} mt={4} width={'350px'} display={'flex'} flexDirection={'column'} height={'100%'}>
          <Typography variant={'h5'}>Exportar</Typography>
          <Box mt={2}>
            <FormControl fullWidth>
              <InputLabel id="select-formato">Formato</InputLabel>
              <Select
                labelId="select-formato"
                id="select-formato-id"
                onChange={handleChangeFormato}
                value={formato}
                label="Formato"
              >
                <MenuItem value={'excel'}>EXCEL</MenuItem>
                <MenuItem value={'cg6'}>CG6</MenuItem>
                <MenuItem value={'csv'}>CSV</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mt={2}>
            <TextField fullWidth label="Cantidad de registros" value={5} />
            <Typography variant={'caption'}>Registros totales: 5</Typography>
          </Box>
          <Box mt={2}>
            <Typography>Columnas:</Typography>
            <FormGroup>
              {tableHead.map((element) => (
                <FormControlLabel key={element.label} control={<Checkbox defaultChecked />} label={element.label} />
              ))}
            </FormGroup>
          </Box>
          <Box alignSelf={'flex-end'} mt={'auto'}>
            <Button variant={'text'} size={'large'} onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant={'contained'} size={'large'} onClick={handleClose} sx={{ marginLeft: 1 }}>
              Exportar
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default Export
