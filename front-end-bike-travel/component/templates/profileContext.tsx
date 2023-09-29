// profileContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Interface pour les informations de profil utilisateur
interface UserProfile {
  id: number;
  name: string;
  email: string;
  // Ajoutez d'autres propriétés de profil si nécessaire
}

// Interface du contexte de profil
interface ProfileContextType {
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile | null) => void;
}

// Créez le contexte
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

// Créez le fournisseur de profil
export function ProfileProvider({ children }: { children: ReactNode }) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Utilisez useEffect pour charger le profil de l'utilisateur à partir de l'API
  useEffect(() => {
    // Effectuez ici une requête pour obtenir les données du profil utilisateur
    // Exemple :
    // fetchUserProfile().then((data) => setUserProfile(data));
  }, []); // Le tableau vide assure que cela ne se produit qu'une fois au montage initial

  return (
    <ProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

// Créez un hook pour utiliser le contexte de profil
export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile doit être utilisé dans un composant englobé par ProfileProvider");
  }
  return context;
}
