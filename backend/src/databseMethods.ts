


const getUser = async (req: Request, res: Response) => {
    try {
      // Get the person with the specified ID
      const personId = req.params.userId;
      console.log(`personId: ${personId}`);
      if (personId) {
        const result = await database.read(personId);
        console.log(`persons: ${JSON.stringify(result)}`);
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    } catch (err) {
      res.status(500).json({ error: err?.message });
    }
  };