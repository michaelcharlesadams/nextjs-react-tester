export default async function handler(req, res) {
    try {
      const response = await fetch('https://venefish.enesien.com/api/companies');
      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch companies data', error: error.message });
    }
  }
  