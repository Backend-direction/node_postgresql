import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from '../form/form-input-text';
import { FormAutocomplete } from '../form/form-autocomplete';
import { FormInputImage } from '../form/form-input-image';

const managers = ['MacGonegel', 'Sirius Sneip'];

export default function CreateProjectDialog({ open, handleClose }) {
  const methods = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      description: "",
      productOwner: "",
      team: "",
      image: "./contemplative-reptile.jpg"
    },
    shouldUnregister: false
  });

  const { handleSubmit } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <Dialog open={open} onClose={handleClose}>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <DialogTitle>
            Create new project
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              Here you can create new project with all necessary info
            </DialogContentText>

            <FormInputImage 
              name="image"
            />

            <FormInputText
              name="name"
              label="Name*"
              rules={{ required: "Required" }}
            /> 

            <FormInputText
              name="description"
              label="Description*"
              rules={{ required: "Required" }}
            /> 

            <FormAutocomplete
              label={"Assigne PO*"}
              name="productOwner"
              options={managers}
              rules={{ required: "Required" }}
            />

            <FormAutocomplete
              label={"Assigne team*"}
              name="team"
              options={managers}
              rules={{ required: "Required" }}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit(onSubmit)}>Create</Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  )
}