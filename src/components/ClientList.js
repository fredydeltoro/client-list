import { useState } from 'react'

export default function ClientList() {
  const [clients, setClients] = useState([])
  const [client, setClient] = useState('')

  const addClient = () => {
    setClients(clients.concat(client))
    setClient('')
  }

  const handleChange = (e) => {
    setClient(e.target.value)
  }

  const handleRemove = (index) => { 
    setClients(clients.filter((el, idx) => idx !== index))
  }

  return (
    <>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <input
          onChange={handleChange}
          value={client}
          type="text"
          class="white large outlined"
          size="35"
          placeholder="Name"
        />
        <button
          data-testid="most-upvoted-link"
          class="flat"
          onClick={addClient}
        >
          Add Client
        </button>
      </div>
      <div className="card w-30 mx-auto">
        <table>
          <tbody>
            {
              clients.map((c, index) => 
                <tr key={index}>
                  <td>
                    <div style={{float: 'left'}}>
                      {c}
                    </div>
                    <div 
                      onClick={() => handleRemove(index)}
                      style={{float: 'right', cursor: 'pointer'}}
                    >
                      &times;
                    </div>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
