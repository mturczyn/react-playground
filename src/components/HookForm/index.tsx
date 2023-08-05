import {
    Grid,
    TextField,
    Tooltip,
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@mui/material'
import CommonButton from '../CommonButton'
import Badge from '@mui/material/Badge'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const validationSchema = Yup.object().shape({
    // select: Yup.string().required('Color is required!'),
    email: Yup.string().email().required('Email is required'),
    gender: Yup.string().required('Gender is required'),
    // checkbox: Yup.bool().oneOf([true], 'Checkbox is required'),
    // radio: Yup.string().required('Radio is required!'),
})

export function HookForm() {
    const onSubmit = (values: any) => {
        console.log('asdfasfd;')
        alert(JSON.stringify(values))
    }

    const {
        formState: { errors },
        register,
        handleSubmit,
    } = useForm({
        resolver: yupResolver(validationSchema),
    })

    return (
        <Grid item={true} xs={8} sx={{ marginLeft: '1rem' }}>
            <h1>
                This form developed using React Hook Form (RHF) in conjunction
                with Material UI.
            </h1>

            <div className="container">
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" {...register('email')} />
                        {errors.email && (
                            <p className="error"> {errors.email.message} </p>
                        )}
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">
                            Select a color to continue
                        </label>
                        <select {...register('select')}>
                            <option value="" label="Select a color" />
                            <option value="red" label="red" />
                            <option value="blue" label="blue" />
                            <option value="green" label="green" />
                        </select>
                        {errors.select && (
                            <p className="error"> {errors.select.message} </p>
                        )}
                    </div>
                    <div className="form-row">
                        <label htmlFor="checkbox">
                            <input type="checkbox" {...register('checkbox')} />
                            Accept Terms & Conditions
                        </label>
                        {errors.checkbox && (
                            <p className="error"> {errors.checkbox.message} </p>
                        )}
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Option 1"
                                {...register('radio')}
                            />
                            One
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Option 2"
                                {...register('radio')}
                            />
                            Two
                        </label>
                        {errors.radio && (
                            <p className="error"> {errors.radio.message} </p>
                        )}
                    </div>
                    <button type="submit">Sign In</button>
                </form>
                <h1>Using Material UI components</h1> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register('email')}
                        id="email"
                        label="Email Address"
                        name="email"
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                    />
                    <RadioGroup
                        onError={() => alert(errors.gender?.message)}
                        aria-labelledby="demo-radio-buttons-group-label"
                        {...register('gender')}
                    >
                        <FormControlLabel
                            onError={() => alert(errors.gender?.message)}
                            {...register('gender')}
                            value="female"
                            control={<Radio />}
                            label="Female"
                        />
                        <FormControlLabel
                            onError={() => alert(errors.gender?.message)}
                            {...register('gender')}
                            value="male"
                            control={<Radio />}
                            label="Male"
                        />
                        <FormControlLabel
                            onError={() => alert(errors.gender?.message)}
                            {...register('gender')}
                            value="other"
                            control={<Radio />}
                            label="Other"
                        />
                    </RadioGroup>
                    <Button
                        sx={{
                            border: '1px dotted rgb(0, 0, 0)',
                            backgroundColor: 'transparent',
                            '&:hover': {
                                backgroundColor: 'rgba(100, 100, 100, 0.5)',
                            },
                        }}
                        type="submit"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Grid>
    )
}
