export interface ThemeContextType {
    themeflag: boolean;
    theme: string;
    toggleTheme: () => void;
}
export type ThemeContextProviderType = {
    children: React.ReactNode
}