(() => {
  function getMovieById(id: string) {
    console.log({ id });
  }

  function getCastByMovieId(id: string) {
    console.log({ id });
  }

  function getArctorBioById(id: string) {
    console.log({ id });
  }

  type Movie = {
    cast: string[];
    description: string;
    rating: string;
    title: string;
  };

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  type Actor = {
    fullName: string;
    birthdate: Date;
  };

  function createActor({ fullName, birthdate }: Actor): boolean {
    if (fullName === 'fernando') return false;

    console.log('Crear actor', birthdate);
    return true;
  }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    return isRetired ? 3000 : 4000;
  };
})();
