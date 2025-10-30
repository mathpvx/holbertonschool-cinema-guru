import { useState } from 'react'
import Input from './components/general/Input'
import SelectInput from './components/general/SelectInput'
import Button from './components/general/Button'
import SearchBar from './components/general/SearchBar'

export default function App() {
  const [username, setUsername] = useState('')
  const [minDate, setMinDate] = useState('')
  const [sort, setSort] = useState('Default')
  const [title, setTitle] = useState('')

  const options = ['Default', 'Latest', 'Oldest', 'Highest Rated', 'Lowest Rated']

  return (
    <div style={{ padding: '2rem', background: '#111', minHeight: '100vh', color: 'white' }}>
      <h2>General Components Preview</h2>
      <Input label="Username:" value={username} setValue={setUsername} />
      <Input label="Min Date:" type="number" value={minDate} setValue={setMinDate} />
      <SelectInput label="Sort:" options={options} value={sort} setValue={setSort} />
      <Button label="Load More.." onClick={() => alert('Clicked!')} />
      <SearchBar title={title} setTitle={setTitle} />
    </div>
  )
}
