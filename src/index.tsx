import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { Authentication } from './components/Authentication'
import { ThemeProvider } from '@emotion/react'
import { globalTheme } from './globalTheme'
import { HookForm } from './components/HookForm'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ThemeProvider theme={globalTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route
                            path={routes.Authentication}
                            element={<Authentication />}
                        />
                        <Route path={routes.HookForm} element={<HookForm />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
