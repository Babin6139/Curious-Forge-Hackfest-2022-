use anchor_lang::prelude::*;
pub mod instructions;

pub use instructions::*;
declare_id!("4iQ2KSjKPtSzf9DdWeCSfXZsuWDTcDCgD9gACP5TLE6y");

#[program]
pub mod test_solana {
    use super::*;

    pub fn create_account(ctx: Context<UserAccount>,name:String,phone_no:String) -> Result<()> {
        create_account::create_account(ctx, name, phone_no)
    }
}
