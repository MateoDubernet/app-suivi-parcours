import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const protectRoute = (Component: React.FC) => {
  const ProtectedRoute: React.FC = (props) => {
    const router = useRouter();
    const userCookie = Cookies.get('user'); // Récupérez le cookie 'user'

    useEffect(() => {
      if (!userCookie) {
        // Redirigez l'utilisateur vers la page de connexion s'il n'est pas authentifié
        router.push('/login'); // Personnalisez la redirection selon vos besoins
      }
    }, [userCookie]);

    // Vous n'avez pas besoin de retourner null ici, il vous suffit de laisser le composant gérer la redirection.

    // Si l'utilisateur est authentifié, affichez le composant demandé
    return <Component {...props} />;
  };

  return ProtectedRoute;
};
