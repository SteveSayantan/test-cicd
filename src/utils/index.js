export const getImageURL=(relPath)=>{
    return new URL(`../assets/${relPath}`,import.meta.url).href
}