import React from 'react'
import '@fontsource/roboto';
import Button from '@material-ui/core/Button';
import DeleteIcon from "@material-ui/icons//Delete";
import SendIcon from "@material-ui/icons//Send";
type Props = {}

const Social = (props: Props) => {
  return (
      <div>
          <Button variant="text" color="primary">
          <p className='text-black'>Hellooo</p>
          </Button>
          <Button
          variant="outlined"
          color="primary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
    </div>
  )
}

export default Social