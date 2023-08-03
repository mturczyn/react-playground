import { Grid, Tooltip } from '@mui/material'
import CommonButton from '../CommonButton'
import Badge from '@mui/material/Badge'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const validationSchema = Yup.object().shape({
    select: Yup.string().required('Color is required!'),
    email: Yup.string().email().required('Email is required'),
    checkbox: Yup.bool().oneOf([true], 'Checkbox is required'),
    radio: Yup.string().required('Radio is required!'),
})

export function HookForm() {
    const onSubmit = (values: any) => {
        alert(JSON.stringify(values))
    }

    const {
        formState: { errors },
        register,
        handleSubmit,
    } = useForm({
        resolver: yupResolver(validationSchema),
    })
    console.log('errors', errors)
    return (
        <Grid item={true} xs={8} sx={{ marginLeft: '1rem' }}>
            <h1>
                This form developed using React Hook Form (RHF) in conjunction
                with Material UI.
            </h1>

            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
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
            </div>
        </Grid>
    )
}
