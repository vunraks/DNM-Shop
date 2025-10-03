import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Auth(){
  const [username, setUsername] = useState('kminchelle')
  const [password, setPassword] = useState('0lelplR')
  const dispatch = useDispatch()
  const { status, error } = useSelector(s => s.auth)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(loginUser({ username, password })).unwrap()
      navigate('/profile')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="max-w-md bg-white p-4 rounded-md shadow">
      <h2 className="text-lg font-semibold mb-3">Логин</h2>
      <form onSubmit={submit} className="space-y-3">
        <label className="block">
          <div className="text-sm">Имя</div>
          <input className="mt-1 w-full border rounded p-2 text-white" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label className="block">
          <div className="text-sm">Пароль</div>
          <input type="password" className="mt-1 w-full border rounded p-2 text-white" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <div className="flex items-center gap-3">
          <button type="submit" className="px-3 py-1 border rounded" disabled={status === 'loading'}>Login</button>
          {error && <div className="text-red-600">{error}</div>}
        </div>
        <div className="text-sm text-white">Hint: Имя <code>kminchelle</code> / Пароль <code>0lelplR</code></div>
      </form>
    </div>
  )
}
