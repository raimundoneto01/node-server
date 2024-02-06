import { produtos } from "../db/produtos.js"

export const ProdutoService = {

    buscarProdutos: (req, res) => {
        
        return produtos
    }
    ,
    buscarProdutosId: (req, res) => {
       
        let idReq = req.params.id

        return produtos.find( p => p.id === parseInt(idReq))
        
    }
    ,
    enviarProduto: (req, res) => {
        const text = 'Enviar produto específico por id '
        res.send('GET - Resende3!')
    }
    ,
    criarProdutos: (req, res) => {
        let produtoReq = req.body
        return produtos.push(produtoReq)
    }
    ,
    editarProdutos: (req, res) => {
        const text = 'Deletar um produto por id'
        res.send('GET - Resende5!')
    },

    deletarProdutos: (req, res) => {
        const text = 'Deletar um produto por id'
        res.send('GET - Resende5!')
    }


}
