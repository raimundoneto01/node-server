export const ProdutoService = {

    buscarProdutos: (req, res) => {
        const text = 'Todos os produtos'
        res.send(`GET - Resende1!/${text}`)
    }
    ,
    buscarProdutosId: (req, res) => {
        const Text = 'Produto específico por Id'
        res.send("GET - Resende2!")
    }
    ,
    enviarProduto: (req, res) => {
        const text = 'Enviar produto específico por id '
        res.send('GET - Resende3!')
    }
    ,
    criarProdutos: (req, res) => {
        const text = 'Criar produto por id'
        res.send('GET - Resende4!')
    }
    ,
    deletarProdutos: (req, res) => {
        const text = 'Deletar um produto por id'
        res.send('GET - Resende5!')
    }



}
