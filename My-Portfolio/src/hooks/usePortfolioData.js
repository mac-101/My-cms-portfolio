import { useEffect, useState } from 'react'

export default function usePortfolioData(loadData) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    loadData()
      .then((result) => {
        if (active) setData(result)
      })
      .catch((requestError) => {
        if (active) {
          setError(
            requestError.response?.data?.detail ||
              requestError.message ||
              'Unable to load portfolio data.',
          )
        }
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [loadData])

  return { data, loading, error }
}
