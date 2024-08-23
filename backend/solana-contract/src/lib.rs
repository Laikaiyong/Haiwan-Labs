use anchor_lang::prelude::*;

declare_id!("EXEhifUx6GviNLFiFL6TDgU49XPYqdK1gZJ5qDXvr98");

#[program]
pub mod solana_contract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[account]
pub struct Message {
    pub author: Pubkey,
    pub timestamp: i64,
    pub content: String,
}

#[derive(Accounts)]
pub struct Initialize {}



#[derive(Accounts)]
pub struct CreateMessage<'info> {
		#[account(init, payer = author, space = 1000)]
    pub message: Account<'info, Message>,
		#[account(mut)]
    pub author: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateMessage<'info> {
		#[account(mut)]
    pub message: Account<'info, Message>,
		#[account(mut)]
    pub author: Signer<'info>,
}
