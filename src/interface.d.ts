export interface IAPI {
    createCategory: (name: string, description: string) => Promise<{ status: number, message: string; id?: string }>,
    findByIdCategory: (id: string) => Promise<{ status: number, message: string, element?: Category}>,
    deleteCategory: (id: string) => Promise<{ status: number, message: string }>,
    updateCategory: (id: string, data: Partial<Category>) => Promise<{ status: number, message: string, element?: Category }>,
    getCategoryies: () => Promise<{status: number, elements: Category[]}>,
}
  
declare global {
    interface Window {
        API: IAPI
    }
}