/**
 * Created by Hernan Y.Ke on 2016/3/8.
 */
export function createSub(t){
    return{
        next(item){console.log(`${t}${item}`)},
        error(error){
            console.log(`${error}`)
        },
        complete(){
            console.log(`complete`)
        }
    }
}
