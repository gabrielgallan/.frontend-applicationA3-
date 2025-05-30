import React, { useState } from 'react'
import LoginForm from './components/login-form/login_form.jsx'
import Background from './components/background/background.jsx'
import Layouts from './components/layouts/layouts.jsx'
import Loader from './components/loader/loader.jsx'

function App() {
    const [loading, setLoading] = useState(false)

    return (
        <Layouts>
            {loading ? (
                <Loader />
            ) : (
                <LoginForm setLoading={setLoading} />
            )}
        </Layouts>
    )
}

export default App