using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace LoanApp.DB.Models
{
    public partial class LoansContext : DbContext
    {
        public LoansContext()
        {
        }

        public LoansContext(DbContextOptions<LoansContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblCustomer> TblCustomers { get; set; }
        public virtual DbSet<TblInvoice> TblInvoices { get; set; }
        public virtual DbSet<TblLoan> TblLoans { get; set; }
        public virtual DbSet<TblLoanType> TblLoanTypes { get; set; }
        public virtual DbSet<TblPayment> TblPayments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AI");

            modelBuilder.Entity<TblCustomer>(entity =>
            {
                entity.HasKey(e => e.CustomerId)
                    .HasName("PK__tblCusto__B611CB7D9BAA9CB6");

                entity.ToTable("tblCustomers");

                entity.Property(e => e.CustomerId)
                    .HasMaxLength(500)
                    .HasColumnName("customerId");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("address");

                entity.Property(e => e.Department)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("department");

                entity.Property(e => e.EmailAddress)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("emailAddress");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("lastName");

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("phoneNumber");
            });

            modelBuilder.Entity<TblInvoice>(entity =>
            {
                entity.HasKey(e => e.PaymentId)
                    .HasName("PK__tblInvoi__A0D9EFC633812E6F");

                entity.ToTable("tblInvoices");

                entity.Property(e => e.PaymentId)
                    .HasMaxLength(500)
                    .HasColumnName("paymentId");

                entity.Property(e => e.Amount)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("customerId");

                entity.Property(e => e.CustomerName)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("customerName");

                entity.Property(e => e.Date)
                    .HasColumnType("datetime")
                    .HasColumnName("date");

                entity.Property(e => e.Mode)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("mode");

                entity.Property(e => e.Notes).HasColumnName("notes");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.TblInvoices)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tblInvoic__notes__52593CB8");
            });

            modelBuilder.Entity<TblLoan>(entity =>
            {
                entity.HasKey(e => e.LoanId)
                    .HasName("PK__tblLoans__6DB788FFCF9C049E");

                entity.ToTable("tblLoans");

                entity.Property(e => e.LoanId)
                    .HasMaxLength(500)
                    .HasColumnName("loanId");

                entity.Property(e => e.CustomerName)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("customerName");

                entity.Property(e => e.Installments).HasColumnName("installments");

                entity.Property(e => e.LoanStatus)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("loanStatus");

                entity.Property(e => e.LoanType)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("loanType");

                entity.Property(e => e.PendingAmount)
                    .HasMaxLength(500)
                    .HasColumnName("pendingAmount");

                entity.Property(e => e.Roi)
                    .HasColumnType("decimal(18, 2)")
                    .HasColumnName("roi");

                entity.Property(e => e.TotalAmount)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("totalAmount");
            });

            modelBuilder.Entity<TblLoanType>(entity =>
            {
                entity.HasKey(e => e.LoanTypeId)
                    .HasName("PK__tblLoanT__2422B27DE1545DC7");

                entity.ToTable("tblLoanTypes");

                entity.Property(e => e.LoanTypeId)
                    .HasMaxLength(500)
                    .HasColumnName("loanTypeId");

                entity.Property(e => e.ActionDate)
                    .HasColumnType("datetime")
                    .HasColumnName("actionDate");

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("customerId");

                entity.Property(e => e.CustomerName)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("customerName");

                entity.Property(e => e.LoanType)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("loanType");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.TblLoanTypes)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tblLoanTy__actio__5535A963");
            });

            modelBuilder.Entity<TblPayment>(entity =>
            {
                entity.HasKey(e => e.PaymentId)
                    .HasName("PK__tblPayme__A0D9EFC608590F99");

                entity.ToTable("tblPayments");

                entity.Property(e => e.PaymentId)
                    .HasMaxLength(500)
                    .HasColumnName("paymentId");

                entity.Property(e => e.Amount)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("customerId");

                entity.Property(e => e.CustomerName)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("customerName");

                entity.Property(e => e.Date)
                    .HasColumnType("datetime")
                    .HasColumnName("date");

                entity.Property(e => e.Mode)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("mode");

                entity.Property(e => e.Notes).HasColumnName("notes");

                entity.Property(e => e.Tax)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.TblPayments)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tblPaymen__notes__4F7CD00D");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
