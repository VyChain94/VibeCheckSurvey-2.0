import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const defaultValues = {
  name: "",
  experience: "",
  location: "",
  emotion: "",
  scale: 0,
};

const Survey = () => {

  const [formValues, setFormValues] = useState(defaultValues);
  //modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
  const { name, value} = e.target;

  setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (

    <form className="form" onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            variant="standard"
            margin="normal"
          />
        </Grid>
        <Grid item>
        <TextareaAutosize
        id="experience"
        name="experience"
        type="text"
        value={formValues.experience}
        onChange={handleInputChange}
        aria-label="description"
        placeholder="experience"
        style={{ width: 200 }}
        />
        </Grid>
        <Grid item>
          <FormControl margin="normal">
            <FormLabel>Location</FormLabel>
            <RadioGroup
              name="location"
              value={formValues.location}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="home"
                value="home"
                control={<Radio size="small" color="success" />}
                label="Home"
              />
              <FormControlLabel
                key="work"
                value="work"
                control={<Radio size="small" color="success" />}
                label="Work"
              />
              <FormControlLabel
                key="store"
                value="the store"
                control={<Radio size="small" color="success" />}
                label="Store"
              />
            </RadioGroup>
          </FormControl>
        </Grid>        
        <Grid item>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="emotion">Emotion</InputLabel>
            <Select
              name="emotion"
              value={formValues.emotion}
              onChange={handleInputChange}
            >
              <MenuItem key="excited" value="excited">
                Excited
              </MenuItem>
              <MenuItem key="humbled" value="humbled">
                Humbled
              </MenuItem>
              <MenuItem key="loved" value="loved">
                Loved
              </MenuItem>
              <MenuItem key="grateful" value="grateful">
                Grateful
              </MenuItem>
              <MenuItem key="motivated" value="motivated">
                Motivated
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <div style={{ width: "400px" }}>
            How'd you feel on a scale of 1-5
            <Slider
              id="slider"
              value={formValues.scale}
              onChange={handleSliderChange("scale")}
              defaultValue={1}
              step={1}
              min={1}
              max={5}
              marks={[
                {
                  value: 1,
                  label: "1",
                },
                {
                  value: 2,
                  label: "2",
                },
                {
                  value: 3,
                  label: "3",
                },
                {
                  value: 4,
                  label: "4",
                },
                {
                  value: 5,
                  label: "5",
                },
              ]}
              valueLabelDisplay="off"
            />
          </div>
        </Grid>        
        <Button variant="contained" color="primary" type="submit"
         onClick={handleClickOpen}>
        Submit
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Thank you for the update! 🎊"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`Hello ${formValues.name} we are glad to about your 
            positive experience at ${formValues.location}
            and that you were able to feel ${formValues.emotion}, 
            here’s to many more positive experiences!😁
            `}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </Grid>
    </form>
  );
};
export default Survey;



