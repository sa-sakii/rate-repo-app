import { Pressable, Text, View, TextInput } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

const initialValues = {
    username: "",
    password: "",
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),

    password: yup
        .string()
        .required('Password is required'),
})

const SignInForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    })

    return (
        <View>
            <TextInput
                placeholder='Enter the username'
                value={formik.values.username}
                onChangeText={formik.handleChange('username')}
            />
            {formik.touched.username && formik.errors.username && (
                <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
            )}
            <TextInput
                placeholder='Enter the password'
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
            />
            {formik.touched.password && formik.errors.password && (
                <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
            )}
            <Pressable onPress={formik.handleSubmit}>
                <Text>Sign in</Text>
            </Pressable>
        </View>
    )
};

const SignIn = () => {
    const onSubmit = values => {
        const username = values.username;
        const password = values.password;

        if (username && password) {
            console.log("Form submitted!", username, "", password);
        }
    };

    return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;