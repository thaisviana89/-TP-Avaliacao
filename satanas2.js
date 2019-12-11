ETEC Professor Horácio Augusto da Silveira
Avaliação de Design Digital – Segundo Bimestre – Usabilidade e Padrões de Projeto

Nome: Thais Aparecida Silva Viana



private void btnRaiz_Click(object sender, EventArgs e)
        {
            double nro1;
            double nro2;
            double raiz;
            string rraiz;
            try
            {
                nro1 = Convert.ToDouble(txtNro1.Text);
                raiz = Math.Sqrt(nro1);
                rraiz = Convert.ToString(raiz);
                txtResultado.Text = rraiz;
            }
            catch (FormatException)
            {
                MessageBox.Show("Formatação Errada.");
            }
        }


1.	Organize o código acima segundo o que foi explicado nas aulas de técnicas de programação afim de garantir legibilidade e sustentabilidade do código.

2.	Desenhe uma classe que implemente o código acima como um método. 
